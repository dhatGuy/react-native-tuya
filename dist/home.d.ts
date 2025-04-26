import { HomeDetailsResponse } from 'homeManager';
import { DeviceDps } from './device';
export declare type QueryRoomListParams = {
    homeId?: number;
};
export declare type QueryRoomListResponse = {
    name: string;
    displayOrder: number;
    id: number;
    roomId: number;
}[];
export declare function queryRoomList(params: QueryRoomListParams): Promise<QueryRoomListResponse>;
export declare type GetHomeDetailParams = {
    homeId: number;
};
export declare type DeviceDetailResponse = {
    homeId: number;
    isOnline: boolean;
    isLocalOnline: boolean;
    cloudOnline: boolean;
    productId: string;
    category: string;
    categoryCode: string;
    devId: string;
    iconUrl: string;
    verSw: string;
    name: string;
    dps: DeviceDps;
    homeDisplayOrder: number;
    roomId: number;
};
export declare type RoomBean = {
    name: string;
    displayOrder: number;
    id: number;
    roomId: number;
    background: string;
};
export declare type GetHomeDetailResponse = HomeDetailsResponse & {
    deviceList: DeviceDetailResponse[];
    rooms: any[];
    groupList: any[];
    meshList: any[];
    sharedDeviceList: any[];
    sharedGroupList: any[];
};
export declare function getHomeDetail(params: GetHomeDetailParams): Promise<GetHomeDetailResponse>;
export declare type UpdateHomeParams = {
    homeId: number;
    name: string;
    geoName: string;
    lon: number;
    lat: number;
};
export declare function updateHome(params: UpdateHomeParams): Promise<string>;
export declare type DismissHomeParams = {
    homeId: number;
};
export declare function dismissHome(params: DismissHomeParams): Promise<string>;
export declare type SortRoomsParams = {
    idList: number[];
    homeId: number;
};
export declare function sortRoom(params: SortRoomsParams): Promise<string>;
export declare type AddRoomParams = {
    homeId: number;
    name: string;
};
export declare function addRoom(params: AddRoomParams): Promise<string>;
