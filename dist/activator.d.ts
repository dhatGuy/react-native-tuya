import { DeviceBean } from './device';
import { DeviceDetailResponse } from './home';
/**
 * Open the system network settings.
 * @returns void
 */
export declare function openNetworkSettings(): void;
export declare enum ActivatorType {
    AP = "THING_AP",
    EZ = "THING_EZ",
    AP_4G_GATEWAY = "THING_4G_GATEWAY",
    QR = "THING_QR"
}
export declare type InitActivatorParams = {
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
export declare function initActivator(params: InitActivatorParams): Promise<DeviceDetailResponse>;
/**
 * Stop the activation process.
 */
export declare function stopActivator(): void;
/**
 * Destroy the activator.
 */
export declare function destroyActivator(): void;
export declare function startBluetoothScan(): any;
/**
 * Initiate the Bluetooth dual mode activation process.
 * @param {InitBluetoothActivatorParams} params The parameters for the activation process.
 * @returns {Promise<DeviceBean>} A promise that resolves to a device object.
 */
export declare function initBluetoothDualModeActivator(params: InitBluetoothActivatorParams): Promise<DeviceBean>;
/**
 * Get the current Wi-Fi SSID.
 * @param success A callback that is called with the Wi-Fi SSID.
 * @param error A callback that is called when there is an error.
 */
export declare function getCurrentWifi(success: (ssid: string) => void, error: () => void): any;
