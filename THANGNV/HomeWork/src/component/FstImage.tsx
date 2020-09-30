import React, { useState } from 'react';
import { View, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import { colors } from '../utils/Theme';
import R from '../assets/R';

const FstImage = (props: FastImageProps) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reloadKey, useReloadKey] = useState(new Date().getTime().toString());
  const reloadImage = () => {
    useReloadKey(new Date().getTime().toString());
  };
  var { source } = props;

  if (typeof source == 'object')
    source = source.uri
      ? {
        ...source,
        priority: FastImage.priority.high,
        uri: source.uri
      }
      : R.images.ic_post;
  return (
    <FastImage
      {...props}
      children={
        imageLoading ? (
          <View
            style={{
              backgroundColor: colors.grayBorder,
              flex: 1,
              overflow: 'hidden'
            }}
            children={
              <ActivityIndicator
                color={colors.primary}
                style={{
                  flex: 1
                }}
              />
            }
          />
        ) : error ? (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center'
            }}
            children={
              <Image
                style={{
                  alignSelf: 'center'
                }}
                source={R.images.ic_try_again}
                resizeMode='center'
              />
            }
            onPress={reloadImage}
          />
        ) : (
              props.children
            )
      }
      onLoadStart={() => {
        setError(false);
        setImageLoading(true);
      }}
      onLoadEnd={() => {
        setImageLoading(false);
        setError(false);
      }}
      onError={() => {
        setError(true);
        setImageLoading(false);
      }}
      source={source}
    />
  );
};

export default FstImage;
