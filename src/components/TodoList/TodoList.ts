import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,

    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 8,
  },

  finishButton: {
    marginRight: 8,
    width: 24,

    alignItems: 'center',
    justifyContent: 'center',
  },

  contentText: {
    color: '#F2F2F2',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    flex: 1,
  },

  removeButton: {
    marginLeft: 8,
    width: 32,

    alignItems: 'center',
    justifyContent: 'center',
  },

  removeButtonLabel: {
    fontSize: 24,
    color: '#808080',
  },
});
