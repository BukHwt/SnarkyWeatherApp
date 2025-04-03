import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SnarkyCommentProps {
  comment: string;
}

const SnarkyComment: React.FC<SnarkyCommentProps> = ({comment}) => {
  return (
    <View style={styles.snarkyComment}>
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  snarkyComment: {
    backgroundColor: '#666',
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 8,
  },
  commentText: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'Roboto',
  },
});

export default SnarkyComment;
