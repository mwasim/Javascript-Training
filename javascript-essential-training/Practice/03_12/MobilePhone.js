/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */
const MobilePhone = class {
  constructor(
    name,
    color,
    operatingSystem,
    resWidth,
    resHeight,
    isWifiActive,
    isBluetoothActive,
    dateAcquired
  ) {
    // Define properties:
    this.name = name;
    this.color = color;
    this.operatingSystem = operatingSystem;
    this.resolution = {
      width: resWidth,
      height: resHeight,
    };
    this.isWifiActive = isWifiActive;
    this.isBluetoothActive = isBluetoothActive;
    this.dateAcquired = dateAcquired;
  }

  //Add methods like normal functions
  toggleWifi() {
    this.isWifiActive = !this.isWifiActive;
  }

  toggleBluetooth() {
    this.isBluetoothActive = !this.isBluetoothActive;
  }

  mobilePhoneAgeInDays() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // milliseconds
    let ageInDays = Math.floor(elapsed / (1000 * 3600 * 24)); //1000 - to seconds, 3600 to hours, 24 - to days
    return ageInDays;
  }
};

export default MobilePhone;
