import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    flex: 1,
    padding: 24,
    paddingTop: 0,
  },

  create: {
    flexDirection: 'row',
  },

  input: {
    backgroundColor: '#262626',
    color: '#808080',
    flex: 1,
    marginRight: 4,
    borderRadius: 6,

    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },

  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },

  buttonAdd: {
    color: '#F2F2F2',
    border: 1,
    fontSize: 24,
  },

  totalizers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },

  totalizer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  totalizerValue: {
    marginLeft: 8,
    backgroundColor: '#333333',
    color: '#D9D9D9',
    borderRadius: 999,
    textAlign: 'center',
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',
  },

  created: {
    color: '#4EA8DE',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '700',
  },

  finished: {
    color: '#8284FA',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '700',
  },
});
