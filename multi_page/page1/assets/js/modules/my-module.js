// Пример организации модуля
const ELEMENTS_SELECTOR = {
    myModule: '[my-module]',
    myModuleTitle: '[my-module-title]',
    myModuleBody: '[my-module-body]',
};

const CLASSES = {
    someElementOpened: 'some-element-class--opened',
    anotherElementDisabled: 'another-elemetn-class--disabled',
};

export default function () {
    $(document).on('click', ELEMENTS_SELECTOR.myModuleTitle, handleTitleClick);

    function handleTitleClick() {
        const $myModuleTitle = $(this);
        const $myModule = $myModuleTitle.closest(ELEMENTS_SELECTOR.myModule);

        $myModule.toggleClass(CLASSES.someElementOpened);
    }
}
