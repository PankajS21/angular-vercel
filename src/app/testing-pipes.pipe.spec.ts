import { TestingPipesPipe } from './testing-pipes.pipe';

describe('TestingPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new TestingPipesPipe();
    expect(pipe).toBeTruthy();
  });
});
