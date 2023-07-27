import { renderHook } from "@testing-library/react-hooks";
import { useDelay } from "../../hooks/useDelay";

describe("useDelay", () => {
  jest.useFakeTimers();

  it("should wait for the delay", async () => {
    const timeLaps = 2000;
    const { result } = renderHook(() => useDelay(timeLaps));
    const promise = result.current.wait();

    jest.advanceTimersByTime(timeLaps);

    expect(promise).resolves.toBeUndefined();
  });

  it("should not resolve before the delay have been passed", () => {
    const timeLaps = 2000;
    const { result } = renderHook(() => useDelay(timeLaps));
    const promise = result.current.wait();

    jest.advanceTimersByTime(timeLaps - 500);

    let isResolved = false;
    promise.then(() => {
      isResolved = true;
    });

    expect(isResolved).toBe(false);
  });
});
