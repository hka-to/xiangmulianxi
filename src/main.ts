import { goodData } from './data'
// 作用：需要将所有的DOM元素对象以及相关的资源全部都加载完毕之后，再来实现的事件函path）数
window.onload = function () {
  navPathDataBind()
  function navPathDataBind() {
    /**
     * 思路：
     * 1、先获取路径导航的页面元素（navPath）
     * 2、再来获取所需要的数据（data.js->goodData.path）
     * 3、由于数据是需要动态产生的，那么相应的DOM元素也应该是动态产生的，含义需要根据数据的数量来进行创建DOM元素
     * 4、在遍历数据创建DOM元素的最后一条，只创建a标签，而不创建i标签
     */
    // 1.获取页面导航的元素对象

    const navPath = document.querySelector('#top #content .contentMain #navPath')

    // 2.获取数据
    const path = goodData.path

    // 3.遍历数据
    for (let i = 0; i < path.length; i++) {
      if (i === path.length - 1) {
        // 只需要创建a且没有href属性
        const aNode = document.createElement('a')
        aNode.innerText = path[i].title
        navPath!.appendChild(aNode)
      }
      else {
        // 4.创建a标签
        const aNode = document.createElement('a')
        aNode.href = path[i].url!
        aNode.innerText = path[i].title

        // 5.创建i标签
        const iNode = document.createElement('i')
        iNode.innerText = '/'

        // 6.让navPath元素来追加a和i
        navPath!.appendChild(aNode)
        navPath!.appendChild(iNode)
      }
    }
  }

  // 放大镜的移入移出效果
  bigClassBind()
  function bigClassBind() {
    /**
         * 思路：
         * 1、获取小图框元素对象，并且设置移入事件(onmouseenter)
         * 2、动态的创建蒙版元素以及大图框和大图片元素
         * 3、移出时(onmouseleave)需要移除蒙版元素和大图框
         */

    // 1.获取小图框元素
    const smallPic = document.querySelector<HTMLElement>('#top #content .contentMain #center #left #leftTop #smallPic')!
    // 获取leftTop元素
    const leftTop = document.querySelector('#top #content .contentMain #center #left #leftTop ')!

    // 2.设置移入事件
    smallPic.onmouseenter = function () {
      // 3. 创建蒙版元素
      const maskDiv = document.createElement('div')
      maskDiv.className = 'mask'

      // 4.创建大图框元素
      const BigPic = document.createElement('div')
      BigPic.id = 'bigPic'
      // 5.创建大图片元素
      const BigImg = document.createElement('img')
      // BigImg.src = '/src/assets/b1.png'
      BigImg.src = '\\src\\assets\\b1.png'

      // 6.大图框来追加大图片
      BigPic.appendChild(BigImg)

      // 7.让小图框来追加蒙版元素
      smallPic.appendChild(maskDiv)

      // 8.让leftTop元素追加大图框
      leftTop.appendChild(BigPic)

      // 设置鼠标移出事件
      smallPic.onmouseleave = function () {
        // 让小图框移除蒙板元素
        smallPic.removeChild(maskDiv)
        // 让LeftTop元素移除大图框
        leftTop.removeChild(BigPic)
      }
    }
  }
}
