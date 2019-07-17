import React from 'react';

const serviceWorker = () => {

    const ddd = () => {
        navigator.serviceWorker.register('../sw.js')
            .then(reg => console.log('SW registered!',reg))
            .catch(err => console.log(err));
        setTimeout(() => {
            const img = new Image();
            img.src = 'https://keen0927.github.io/img/keen-logo__none.png';
            document.body.appendChild(img);
        }, 3000)
    }

    return (
        <div>
            <button type="button" onClick={ddd}>버튼 클릭</button>
        </div>
    )
}

export default serviceWorker;