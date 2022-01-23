import { execute } from "./teste";

describe("Test Objective", () => {
  it("should be able join the same letter in sequence and add the sum at first", async () => {
    let wordOutput = "";
    wordOutput = execute("aaabaa");
    expect(wordOutput).toBe("3a1b2a");
    wordOutput = execute("aaabbaac");
    expect(wordOutput).toBe("3a2b2a1c");
    wordOutput = execute("zzZzzZzzzzffeex");
    expect(wordOutput).toBe("10z2f2e1x");
  });
});
