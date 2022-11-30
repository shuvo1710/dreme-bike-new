import React from 'react';

const Blog = () => {
    return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">

                        Question Part
                    </h2>

                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What are the different ways to manage a state in a React application?
                            </p>
                            <p className="text-gray-700">
                                The Four Kinds of React State to Manage
                                Local state. Global state. Server state. URL state.
                               
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                            What is a unit test? Why should we write unit tests?
                            </p>
                            <p className="text-gray-700">
                            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                               
                            </p>
                        </div>


                     
                     
                    </div>
                    <div className="space-y-8">
                        
                    <div>
                            <p className="mb-4 text-xl font-medium">
                            How does prototypical inheritance work?
                            </p>
                            <p className="text-gray-700">
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            </p>
                        </div>
                    <div>
                            <p className="mb-4 text-xl font-medium">
                            React vs. Angular vs. Vue?
                            </p>
                            <p className="text-gray-700">
                            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                            </p>
                        </div>
                          
                          
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;