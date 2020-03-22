module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 1;
  
      arr.forEach(el => {
        if (Array.isArray(el)) {
          const nestedDepth = this.calculateDepth(el);
  
          if (depth < 1 + nestedDepth) {
            depth = 1 + nestedDepth;
          }
        }
      });
  
      return depth;
    }
  };
  