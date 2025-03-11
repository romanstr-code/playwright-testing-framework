/**
 * TestHelper class provides utility functions for testing
 */
class TestHelper {
    /**
     * Generate a random string of specified length
     * @param {number} length - The length of the string to generate
     * @returns {string} - A random string
     */
    static generateRandomString(length = 10) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      
      return result;
    }
  
    /**
     * Wait for a specified amount of time
     * @param {number} ms - The time to wait in milliseconds
     * @returns {Promise<void>}
     */
    static async wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    /**
     * Log test information to console with timestamp
     * @param {string} message - The message to log
     */
    static logInfo(message) {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] INFO: ${message}`);
    }
  }
  
module.exports = TestHelper;