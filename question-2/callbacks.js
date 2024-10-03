const resolvedPromise = () => {
  setTimeout(() => {
    let resolve = { message: "Delayed Sucess" };
    console.log(resolve);
  }, 500);
};

const rejectedPromise = () => {
  setTimeout(() => {
    try {
      throw new Error("{ error: 'Delayed exception' }");
    } catch (e) {
      console.log(e.message);
    }
  }, 500);
};

resolvedPromise();
rejectedPromise();
