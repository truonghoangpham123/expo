import { ImagePickerResult, MediaTypeOptions, ImagePickerOptions } from './ImagePicker.types';
export declare function dismissAsync(options: {
    animateOut?: boolean;
}): Promise<Boolean>;
export declare function launchImageLibraryAsync(options?: ImagePickerOptions): Promise<ImagePickerResult>;
export declare function launchCameraAsync(options?: ImagePickerOptions): Promise<ImagePickerResult>;
export { MediaTypeOptions, ImagePickerOptions, ImagePickerResult };
