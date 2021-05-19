let accordionButton = document
    .querySelectorAll('.accordion__question')
    .forEach((item) => {
        item.addEventListener('click', (event) => {
            console.log('Click');

            // Open accordion item
            if (!item.classList.contains('open')) {
                console.log('toggle accordion button');
                item.nextElementSibling.classList =
                    'accordion__collapse collapsing';

                setTimeout(() => {
                    console.log('open accordion content');
                    item.nextElementSibling.classList =
                        'accordion__collapse open';
                }, 300);
            }
            // Close accordion item
            else {
                // Remove "collapse open" from .accordion__collapse, add "collapsing"
                item.nextElementSibling.calssList =
                    'accordion__collapse collapsing';

                // After X amount of time, remove "collapsing" class and add "collapse" class
                setTimeout(() => {
                    console.log('close accordion content');
                    item.nextElementSibling.classList =
                        'accordion__collapse collapse';
                }, 300);
            }

            item.classList.toggle('open');
        });
    });
