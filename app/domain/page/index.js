/***********************************************
 * 
 * MIT License
 *
 * Copyright (c) 2016 珠峰课堂,Ramroll
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

// export {Example0} from "./Example0"
// export {Example1} from "./Example1"
// export {Example2} from "./Example2"
// export {Example3} from "./Example3"


// 路由的元数据
export const Routes = {
  Example0 : {
    name : "Example0",
    Title : "Example0",
    // 用了get的语法避免循环引用
    get Component() {return require("./Example0").Example0}
  },
  Example1 : {
    name : "Example1",
    Title : "Example1",

    get Component() {return require("./Example1").Example1}
  },
  Example2 : {
    name : "Example2",
    Title : "Example2",
    Inverse : true, // 深色的NavBar
    get Component() {return require("./Example2").Example2}
  },
  Example3 : {
    name : "Example3",
    Title : "Example3",
    Inverse : true, // 深色的NavBar
    get Component() {return require("./Example3").Example3}
  },

}

