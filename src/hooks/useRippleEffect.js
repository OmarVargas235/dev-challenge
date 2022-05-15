/*
    ===================COMO USAR EL HOOK===================

    -------------------Un solo elemento--------------------

        const optionRef = useRef<HTMLDivElement|null>(null);

        const [addEffectRipple] = useRippleEffect(optionRef);

        ELEMENTO QUE VA A TENER EL EFECTO RIPPLE
        <div
            className="container-ripple"
            ref={optionRef}
            onMouseDown={addEffectRipple}
        >
            Hola mundo
        </div>

    -------------------Mas de un elemento------------------

        const optionsRef = useRef<HTMLDivElement[]|null[]>([]);

        const [addEffectRipple] = useRippleEffect(optionsRef);

        ELEMENTOS QUE VAN A TENER EL EFECTO RIPPLE
        [{...}, {...}].map(element => (
            <div
                className="container-ripple"
                ref={tag => (optionsRef.current[index] = tag)}
                onMouseDown={e => addEffectRipple(e, index)}
            >
                Hola mundo
            </div>
        ));
*/

export const useRippleEffect = (prop) => {

    const addEffectRipple = (e, index) => {

        const { current } = prop;
        const isArray = Array.isArray(current);
        const tag = isArray ? current[index] : current;

        const posX = e.pageX - tag.getBoundingClientRect().left;
        const posY = e.pageY - tag.getBoundingClientRect().top;
        const buttonWidth = 2 * tag.offsetWidth;

        const divRippleEffect = document.createElement('div');
        divRippleEffect.className = 'ripple-effect';
        divRippleEffect.style.width = `${buttonWidth}px`;
        divRippleEffect.style.height = `${buttonWidth}px`;
        divRippleEffect.style.left = `${ posX - (buttonWidth / 2) }px`;
        divRippleEffect.style.top = `${ posY - (buttonWidth / 2) }px`;

        tag.appendChild(divRippleEffect);

        window.setTimeout(() => tag.removeChild(divRippleEffect), 900);
    }

    return [addEffectRipple];
}