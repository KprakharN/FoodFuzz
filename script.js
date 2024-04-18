document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector('.navigation__menu');
  const avatarProfile = document.querySelector('.avatar-profile');

  function closeMenu() {
      menu.classList.add('hide');
  }

  document.addEventListener('click', function(event) {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickOnAvatarProfile = avatarProfile.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnAvatarProfile) {
          closeMenu();
      }
  });

  avatarProfile.addEventListener('click', () => {
      menu.classList.toggle('hide');
  });

  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const formOption1 = document.getElementById('formOption1');
  const formOption2 = document.getElementById('formOption2');

  option1.addEventListener('change', function() {
      if (option1.checked) {
          formOption1.style.display = 'block';
          formOption2.style.display = 'none';
      }
  });

  option2.addEventListener('change', function() {
      if (option2.checked) {
          formOption1.style.display = 'none';
          formOption2.style.display = 'block';
      }
  });
});
