export interface TextStyle {
  label: string;
  placeholder: string;
  description: string;
  color: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
  fontFamily?: string;
  textAlign: 'left' | 'center' | 'right';
  marginTop: number;
  marginLeft: number;
  marginRight: number;
  multiline: boolean;
}

export interface ImagePosition {
  top: number;
  left: number;
  width: number;
  height: number;
  borderRadius: number;
}

export interface CardTemplate {
  id: string;
  name: string;
  type: 'business' | 'gift' | 'other';
  width: number;
  height: number;
  backgroundColor: string;
  contractAddress: string;
  backgroundImage: string | null;
  imagePosition: ImagePosition;
  text: {
    title: string;
    subtitle: string;
    name: string;
    contact: string;
    message: string;
  };
  textStyles: {
    title: TextStyle;
    subtitle: TextStyle;
    name: TextStyle;
    contact: TextStyle;
    message: TextStyle;
  };
}