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
    isBluetoothActive
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
  }

  //Add methods like normal functions
  toggleWifi() {
    this.isWifiActive = !this.isWifiActive;
  }

  toggleBluetooth() {
    this.isBluetoothActive = !this.isBluetoothActive;
  }
};

export default MobilePhone;
