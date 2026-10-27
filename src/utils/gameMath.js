// Calculates total available match points (Guaranteed to be an odd integer)
export const getTotalMatchPoints = (N) => (N * N) + N - 1;

// Returns the Smash point value for the final remaining box
export const getSmashBonus = (N) => N;