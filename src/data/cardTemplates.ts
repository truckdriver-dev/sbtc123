import { CardTemplate } from '../types/card';

export const defaultTemplate: CardTemplate = {
  id: 'sbt-card',
  name: 'SBT Card',
  type: 'crypto',
  width: 400,
  height: 250,
  backgroundColor: '#0A0118',
  contractAddress: '0x7Dc3C0A1Bb9c35434D52BF0dB8d96c24E6Bc0B89',
  backgroundImage: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg',
  imagePosition: {
    top: 20,
    left: 20,
    width: 80,
    height: 80,
    borderRadius: 40
  },
  text: {
    title: 'SBT TOKEN',
    subtitle: 'SOLANA BENEFIT TRANSFER',
    name: 'HOLDER NAME',
    contact: 'PERMANENT',
    message: ''
  },
  textStyles: {
    title: {
      label: 'Card Title',
      placeholder: 'SBT CARD',
      description: 'Card title (non-editable)',
      color: '#00F5FF',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '1.2',
      textAlign: 'right',
      marginTop: 20,
      marginLeft: 120,
      marginRight: 20,
      multiline: false
    },
    subtitle: {
      label: 'Card Subtitle',
      placeholder: 'SOLANA BENEFIT TRANSFER',
      description: 'Card subtitle (non-editable)',
      color: '#FF00E5',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '1.4',
      textAlign: 'left',
      marginTop: 100,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    },
    name: {
      label: 'Holder Name',
      placeholder: 'HOLDER NAME',
      description: 'Enter your name or wallet address',
      color: '#B4B7FF',
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '1.4',
      textAlign: 'left',
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    },
    contact: {
      label: 'Status',
      placeholder: 'PERMANENT',
      description: 'Token status (non-editable)',
      color: '#00F5FF',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '1.4',
      textAlign: 'right',
      marginTop: -25,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    },
    message: {
      label: 'Hidden Message',
      placeholder: '',
      description: '',
      color: '#B4B7FF',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '1.4',
      textAlign: 'left',
      marginTop: 0,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    }
  }
};

export const allTemplates: CardTemplate[] = [defaultTemplate];