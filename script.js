document.addEventListener("DOMContentLoaded", function() {
    // 获取所有的 .item 元素
    const items = document.querySelectorAll('.subwayLine .item');
    
    // 定义图片路径数组，这里假设你有不同的图片路径
    const imagePaths = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '10(1).png',
        '11.png',
        '12.png',
        '13.png',
        '14.png',
        '15.png',
        '16.png',
        '17.png',
        '17(1).png',
        '19.png',
        '20.png',
        '21.png',
        '22.png',
        '23.png',
        '24.png',
        'S1.png',
        '25.png',
        '26.png',
    ];
    
    // 插入不同图片的计数器
    let imageIndex = 0;

    // 遍历每一项 item
    items.forEach((item, index) => {
        // 每两个 .item 之间插入图片
        if (index % 2 !== 0) {
            // 创建一个图片容器 div
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            
            // 创建图片元素
            const image = document.createElement('img');
            image.src = imagePaths[imageIndex]; // 选择对应的图片路径
            image.alt = '插图';
            
            // 强制设置图片大小
            image.style.width = '300px';
            image.style.height = '300px';
            image.style.objectFit = 'cover';  // 保证图片比例正常
            
            // 将图片添加到图片容器中
            imageContainer.appendChild(image);

            // 获取当前 item 和下一个 item 之间的位置，插入图片容器
            item.parentNode.insertBefore(imageContainer, item.nextSibling);
            
            // 更新图片索引，以便下一个 item 使用不同的图片
            imageIndex = (imageIndex + 1) % imagePaths.length;
        }
    });
});