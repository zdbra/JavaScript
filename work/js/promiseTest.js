			class MyPromise {
			  constructor(executor) {
			    this.status = 'pending';
			    this.value = undefined;
			    this.error = undefined;
			    this.onFulfilled = null;
			    this.onRejected = null;
			    
			    const resolve = (value) => {
			      if (this.status === 'pending') {
			        this.status = 'fulfilled';
			        this.value = value;
			        if (this.onFulfilled) {
			          this.onFulfilled(value);
			        }
			      }
			    };
			    
			    const reject = (error) => {
			      if (this.status === 'pending') {
			        this.status = 'rejected';
			        this.error = error;
			        if (this.onRejected) {
			          this.onRejected(error);
			        }
			      }
			    };
			    
			    executor(resolve, reject);
			  }
			  
			  then(onFulfilled, onRejected) {
			    this.onFulfilled = onFulfilled;
			    this.onRejected = onRejected;
			  }
			  
			  resolve(value) {
			    if (this.status === 'pending') {
			      this.status = 'fulfilled';
			      this.value = value;
			      if (this.onFulfilled) {
			        this.onFulfilled(value);
			      }
			    }
			  }
			  
			  reject(error) {
			    if (this.status === 'pending') {
			      this.status = 'rejected';
			      this.error = error;
			      if (this.onRejected) {
			        this.onRejected(error);
			      }
			    }
			  }
			}
			
			// 测试
			const myPromise = new MyPromise((resolve, reject) => {
			  // 模拟异步操作
			  setTimeout(() => {
			    resolve('Success');
			    // reject('Error');
			  }, 2000);
			});
			
			myPromise.then(
			  (value) => {
			    console.log('Fulfilled:', value);
			  },
			  (error) => {
			    console.log('Rejected:', error);
			  }
			);
			
			// 手动调用 resolve 和 reject
			// myPromise.resolve('Manually Resolved');
			myPromise.reject('Manually Rejected');
			