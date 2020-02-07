import React, { useState, useEffect } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import { BURGUNDY } from 'constants/color.constants';

import styles from './input-with-label.style';

const visibleIcon = require('assets/images/common/show-password.png');
const notVisibleIcon = require('assets/images/common/hide-password.png');
const passwordType = 'password';
const textType = 'text';

function InputWithLabel({
        clearButton,
        containerStyle,
        handleInputPress,
        inputContainerStyle,
        inputStyle,
        inputType,
        labelStyle,
        labelText,
        onBlur,
        onChangeHandler,
        value,
}) {

  useEffect(() => {
    setImage(notVisibleIcon);
  }, []);

  const [isPassVisible, setIsPassVisible] = useState(false);
  const [image, setImage] = useState(notVisibleIcon);
  const [newInputType, setInputType] = useState(passwordType);
  const [focused, setFocused] = useState(false);

  const changeIcon = () => {
    if(isPassVisible) {
      setImage(notVisibleIcon);
      setInputType(passwordType);
      setIsPassVisible(false);
      return;
    }
    setImage(visibleIcon);
    setInputType(textType);
    setIsPassVisible(true);
  };

  const handleOnBlur = () => {
    onBlur();
    setFocused(false);
  };

  return (
    <View style={{ ...styles.container, ...containerStyle}}>
      <Text style={{ ...styles.label, ...labelStyle }}>{labelText}</Text>
      <View style={{ ...styles.inputContainer, ...inputContainerStyle }}>
        <TextInput
          autoCorrect={false}
          onBlur={handleOnBlur}
          onChangeText={text => onChangeHandler(text)}
          onFocus={() => setFocused(true)}
          onTouchStart={handleInputPress}
          secureTextEntry={inputType === newInputType}
          selectionColor={BURGUNDY}
          style={{ ...styles.input, ...inputStyle, ...(!focused && styles.bold)}}
          value={value}
          showSoftInputOnFocus={inputType === passwordType || inputType === textType}
        />
        {inputType === passwordType ?
          <TouchableOpacity
            onPress={changeIcon}
            style={styles.showPassIcon}
          >
            <Image
              source={image}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          : null
        }
        {clearButton &&
        <TouchableOpacity onPress={() => onChangeHandler('')} style={styles.clearImageContainer}>
          {Boolean(value) && <Image source={require('assets/images/account/clear.png')} style={styles.clearImage}/>}
        </TouchableOpacity>}
      </View>
    </View>
  );
}

InputWithLabel.propTypes = {
  clearButton: PropTypes.bool,
  containerStyle: PropTypes.object,
  handleInputPress: PropTypes.func,
  inputContainerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  inputType: PropTypes.string,
  labelStyle: PropTypes.object,
  labelText: PropTypes.string,
  onBlur: PropTypes.func,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
};

InputWithLabel.defaultProps = {
  clearButton: true,
  containerStyle: null,
  handleInputPress: () => {},
  inputContainerStyle: null,
  inputStyle: null,
  inputType: textType,
  labelStyle: null,
  labelText: '',
  onBlur: () => {},
  value: '',
};

export default InputWithLabel;
