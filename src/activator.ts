import { NativeModules, Platform } from 'react-native';
import { DeviceBean } from './device';
import { DeviceDetailResponse } from './home';

const tuya = NativeModules.TuyaActivatorModule;
const tuyaBLEActivator = NativeModules.TuyaBLEActivatorModule;
const tuyaBLEScanner = NativeModules.TuyaBLEScannerModule;

/**
 * Open the system network settings.
 * @returns void
 */
export function openNetworkSettings(): void {
  return tuya.openNetworkSettings({});
}

export enum ActivatorType {
  AP = 'THING_AP',
  EZ = 'THING_EZ',
  AP_4G_GATEWAY = 'THING_4G_GATEWAY',
  QR = 'THING_QR',
}

export type InitActivatorParams = {
  /**
   * The identifier of the home.
   */
  homeId: number;
  /**
   * The SSID of the network.
   */
  ssid: string;
  /**
   * The password of the network.
   */
  password: string;
  /**
   * The time in seconds to wait for the device to be activated.
   */
  time: number;
  /**
   * The type of the activator.
   */
  type: ActivatorType;
};

export interface InitBluetoothActivatorParams {
  /**
   * The identifier of the device.
   */
  deviceId?: string;
  /**
   * The identifier of the home.
   */
  homeId: number;
  /**
   * The SSID of the network.
   */
  ssid: string;
  /**
   * The password of the network.
   */
  password: string;
}

/**
 * Initiate the activation process.
 * @param {InitActivatorParams} params The parameters for the activation process.
 * @returns {Promise<DeviceDetailResponse>} A promise that resolves to a device object.
 */
export async function initActivator(
  params: InitActivatorParams
): Promise<DeviceDetailResponse> {
  const device = await tuya.initActivator(params);

  // Tuya's Android SDK uses different property names and has different types than the iOS SDK...
  if (Platform.OS === 'android') {
    device.homeId = parseInt(device.ownerId);
    device.category = device.deviceCategory;
  }

  return device;
}

/**
 * Stop the activation process.
 */
export function stopActivator(): void {
  return tuya.stopActivator();
}

/**
 * Destroy the activator.
 */
export function destroyActivator(): void {
  return tuya.destroyActivator();
}

export function startBluetoothScan() {
  /**
   * Start the Bluetooth scan.
   */
  if (Platform.OS === 'ios') {
    return tuyaBLEScanner.startBluetoothScan();
  }
  return tuya.startBluetoothScan();
}

/**
 * Initiate the Bluetooth dual mode activation process.
 * @param {InitBluetoothActivatorParams} params The parameters for the activation process.
 * @returns {Promise<DeviceBean>} A promise that resolves to a device object.
 */
export function initBluetoothDualModeActivator(
  params: InitBluetoothActivatorParams
): Promise<DeviceBean> {
  if (Platform.OS === 'ios') {
    return tuyaBLEActivator.initActivator(params);
  }
  return tuya.initBluetoothDualModeActivator(params);
}

/**
 * Get the current Wi-Fi SSID.
 * @param success A callback that is called with the Wi-Fi SSID.
 * @param error A callback that is called when there is an error.
 */
export function getCurrentWifi(
  success: (ssid: string) => void,
  error: () => void
) {
  // We need the Allow While Using App location permission to use this.
  return tuya.getCurrentWifi({}, success, error);
}
