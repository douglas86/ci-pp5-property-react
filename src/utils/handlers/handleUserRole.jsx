/**
 * Determines if the user profile has the "admin" role.
 *
 * @param {Object} profile - The user profile.
 * @returns {Boolean} - Returns true if the profile has the "admin" role, false otherwise.
 */
export const handleUserRole = (profile) =>
  !!(profile && profile.role === "admin");
