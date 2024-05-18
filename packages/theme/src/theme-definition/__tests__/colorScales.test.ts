import { a, b, error, h, info, p, s, success, warning } from '../colorScales';

describe('ColorScales', () => {
  describe('a-*', () => {
    it('should match snapshot', () => {
      expect(a).toMatchSnapshot();
    });
  });

  describe('b-*', () => {
    it('should match snapshot', () => {
      expect(b).toMatchSnapshot();
    });
  });

  describe('error-*', () => {
    it('should match snapshot', () => {
      expect(error).toMatchSnapshot();
    });
  });

  describe('h-*', () => {
    it('should match snapshot', () => {
      expect(h).toMatchSnapshot();
    });
  });

  describe('info-*', () => {
    it('should match snapshot', () => {
      expect(info).toMatchSnapshot();
    });
  });

  describe('p-*', () => {
    it('should match snapshot', () => {
      expect(p).toMatchSnapshot();
    });
  });

  describe('s-*', () => {
    it('should match snapshot', () => {
      expect(s).toMatchSnapshot();
    });
  });

  describe('success-*', () => {
    it('should match snapshot', () => {
      expect(success).toMatchSnapshot();
    });
  });

  describe('warning-*', () => {
    it('should match snapshot', () => {
      expect(warning).toMatchSnapshot();
    });
  });
});
