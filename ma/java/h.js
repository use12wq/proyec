
    // Crear flores animadas
    function createFlowers() {
      const container = document.getElementById('flowers-container');
      const colors = ['#ffb6c1', '#ff69b4', '#ffa07a', '#ff8c00', '#ff6347', '#ff1493'];

      for (let i = 0; i < 15; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.bottom = '-30px';
        const size = 20 + Math.random() * 30;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        const color = colors[Math.floor(Math.random() * colors.length)];
        flower.style.background = `radial-gradient(circle at 30% 30%, #fff 0%, ${color}60 60%, ${color} 100%)`;
        flower.style.animationDelay = `${Math.random() * 15}s`;
        container.appendChild(flower);
      }
    }

    // Botón de abrazo
    const hugBtn = document.getElementById('hugBtn');
    const messageBox = document.querySelector('.message-box');
    const leftArm = document.querySelector('.arm-left');
    const rightArm = document.querySelector('.arm-right');

    hugBtn.addEventListener('click', function () {
      messageBox.classList.add('hugged');
      leftArm.classList.remove('hidden');
      rightArm.classList.remove('hidden');

      // Corazones flotantes
      for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart text-red-500"></i>';
        heart.className = 'absolute text-2xl animate-bounce';
        const xPos = 50 + (Math.random() * 20 - 10);
        const yPos = 50 + (Math.random() * 20 - 10);
        heart.style.left = `${xPos}%`;
        heart.style.top = `${yPos}%`;
        heart.style.animationDuration = `${1 + Math.random() * 2}s`;
        heart.style.opacity = '0';
        heart.style.transition = 'all 1s ease-out';
        messageBox.appendChild(heart);
        setTimeout(() => {
          heart.style.opacity = '1';
          heart.style.transform = `translateY(-${50 + Math.random() * 100}px) translateX(${Math.random() * 40 - 20}px)`;
        }, 10);
        setTimeout(() => {
          heart.remove();
        }, 2000);
      }

      // Texto y color temporal del botón
      this.innerHTML = '<i class="fas fa-heart mr-2"></i> ¡Abrazo enviado!';
      this.classList.add('bg-green-400');
      this.classList.remove('bg-gradient-to-r');

      // Restaurar
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-hands-helping mr-2"></i> Envíame un abrazo';
        this.classList.remove('bg-green-400');
        this.classList.add('bg-gradient-to-r');
        messageBox.classList.remove('hugged');
        leftArm.classList.add('hidden');
        rightArm.classList.add('hidden');
      }, 2500);
    });

    window.addEventListener('load', createFlowers);