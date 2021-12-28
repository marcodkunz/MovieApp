import {ImagePipe} from './image.pipe';
import {environment} from "../../environments/environment";

describe('ImagePipe', () => {
  it('create successfully an instance', () => {
    const pipe = new ImagePipe();
    expect(pipe).toBeTruthy();
  });
  it('concatenate successfully url', () => {
    const pipe = new ImagePipe();
    expect(pipe.transform("abc")).toBe(environment.baseImageUrl + "abc")
  });
  it('returns null if called on null', () => {
    const pipe = new ImagePipe();
    // @ts-ignore
    expect(pipe.transform(null)).toBe("")
  });
});
