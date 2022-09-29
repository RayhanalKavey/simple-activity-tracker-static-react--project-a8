import React from "react";
import "./Qna.css";
const Qna = () => {
  return (
    <div className="">
      <div className="bg-white rounded-lg p-5 mb-5">
        <h1 className="text-3xl  mb-3">Q. How does react work?</h1>
        <p className="text-[16px] text-xl pl-9 text-slate-400 mb-5">
          Ans: React uses a declarative paradigm that makes it easier to reason
          about your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes.
          <br />
          React reads these objects and uses them to create HTML elements on the
          virtual DOM, after which it gets synced with the real DOM. So we'll
          have trees of objects on the virtual DOM and trees of objects on the
          real DOM. React automatically updates the associated DOM element when
          we change data on a React element.
        </p>
      </div>
      <div className="bg-white rounded-lg p-5 mb-5">
        <h1 className="text-3xl  mb-3">
          Q. What are the differences between props and state?
        </h1>
        <div className="text-[16px] text-xl pl-9  text-slate-400 mb-5">
          Ans: Differences are given below
          <div className="p-v-s w-full text-left bg-slate-50 rounded-lg  p-5">
            <div className="flex text-black text-xl font-semibold mb-3">
              <div className="w-1/2">React State</div>
              <div className="w-1/2">Props</div>
            </div>
            {/* row-1 */}
            <div className="flex gap-4">
              <div className="w-1/2 mb-2">
                React State is mutable and its value can be changed as per
                requirement.
              </div>
              <div className="w-1/2 mb-2">
                Props are immutable that is their content cannot be change once
                assigned.
              </div>
            </div>
            {/* row-2 */}
            <div className="flex ">
              <div className="w-1/2 mb-2">Set by parent component.</div>
              <div className="w-1/2 mb-2">
                Set by event handlers that is they are completed manage bu
                component itself.
              </div>
            </div>
            {/* row-3 */}
            <div className="flex ">
              <div className="w-1/2 mb-2">
                State is local to a component and cannot be used in other
                components.
              </div>
              <div className="w-1/2 mb-2">
                Props allows child components to read values from parent
                components.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5 mb-5">
        <h1 className="text-3xl  mb-3">
          Q. What are the uses of useEffect beside data load?
        </h1>
        <p className="text-[16px] text-xl pl-9 text-slate-400 mb-5">
          The useEffect Hook allows you to perform side effects in your
          components.
          <br />
          Beside data load, Some examples of side effects are: directly updating
          the DOM, and timers.
          <br />
          useEffect accepts two arguments. The second argument is optional.
        </p>
      </div>
    </div>
  );
};

export default Qna;
