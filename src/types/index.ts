import { AutoComplete } from '@src/formComponent';
import {TextInput, ViewStyle, TextStyle, ImageStyle} from 'react-native'
import {Image as ImageType} from 'react-native-image-crop-picker';

interface TextBaseProps {
    value?:  string, 
    upsideEmit: (val: string) => void ,
    textInputStyle?:  TextStyle
    defaultColor: string
}

export type TextInputProps = TextBaseProps & TextInput


export interface OTPprops  {
    noOfTextInput: number
    upsideEmit: (values: Array<string>, value:string, refForTheCurrentValue:number) => void,
    value: Array<string>,
    textInputStyle?:  TextStyle
    inputTextPlaceHolder?: Array<string>
  }

export interface ImageBaseProps {
    cropHeight?: number,
    cropWidth?: number, 
    imageComponentStyle: ImageStyle, 
    defaultColor: string, 
  }
  

  export interface SingleImageProps extends ImageBaseProps {
    value?: ImageType
    upsideEmit: (value: ImageType) => void,
  }

 export interface MultipleImageProps extends ImageBaseProps {
    value?: Array<ImageType | null>
    maximumNoOfImages?: number
    upsideEmit: (value: Array<ImageType | null>) => void,
  }
  
  export interface AutoCompleteObj {
      id: number | string
      title: string
      value: string
      [key:string]: any
  }

  interface AutocompleteErrorMessage {
    message: string, 
    [key:string]: any
  }

  
  export interface AutoCompleteBaseProps { 
    upsideEmit: (val: AutoCompleteObj | null | string, selection: boolean, errorMessage?: AutocompleteErrorMessage) => void,
    defaultColor?: string,
    value: AutoCompleteObj
    asyncFunction: (val:string) => Promise<AutoCompleteObj[]>,
    textInputStyle: TextStyle,
    loaderRequired?: boolean,
    listTextStyle?: TextStyle
    listViewStyle?:ViewStyle
    debouncingTime?: number
    debouncingEnable?: boolean
  }

  export type AutoCompleteProps = AutoCompleteBaseProps & TextInput