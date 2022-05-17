import styled from 'styled-components';

export const Container = styled.div`

    padding-top: 30px;

    /* Light theme */

    .toggle--checkbox {
        display: none;
    }

    .toggle--label {
        width: 90px;
        height: 40px;
        background: var(--blue-color);
        border-radius: 100px;
        border: 5px solid var(--blue-border);
        display: flex;
        position: relative;
        transition: all 350ms ease-in;
    }

    .toggle--label:before {
        animation-name: reverse;
        animation-duration: 350ms;
        animation-fill-mode: forwards;
        transition: all 350ms ease-in;
        content: '';
        width: 20px;
        height: 20px;
        border: 5px solid var(--yellow-border);
        position: absolute;
        top: 0px;
        border-radius: 82px;
        background: var(--yellow-background);
    }

    @keyframes reverse {
        0% {
            left: 40px;
        }

        60% {
            left: 20px;
            width: 50px;
        }
        
        100% {
            left: 2px;
            width: 20px;
        }
    }

    .toggle--label-background {
        width: 10px;
        height: 5px;
        border-radius: 5px;
        position: relative;
        background: var(--white);
        left: 48px;
        top: 15px;
        transition: all 150ms ease-in;
    }

    .toggle--label-background:before {
        content: '';
        position: absolute;
        top: -5px;
        width: 25px;
        height: 5px;
        border-radius: 5px;
        background: var(--white);
        left: -10px;
        transition: all 150ms ease-in;
    }

    .toggle--label-background:after {
        content: '';
        position: absolute;
        top: 5px;
        width: 25px;
        height: 5px;
        border-radius: 5px;
        background: var(--white);
        left: -3px;
        transition: all 150ms ease-in;
    }

    /* Dark theme */

    .toggle--checkbox:checked + .toggle--label {
        background: var(--indigo-color);
        border-color: var(--indigo-border);
    }

    .toggle--checkbox:checked + .toggle--label:before {
        background: var(--white);
        border-color: var(--gray-border);
        animation-name: switch;
        animation-duration: 350ms;
        animation-fill-mode: forwards;
    }

    @keyframes switch {
        0% {
            left: 4px;
        }

        60% {
            left: 4px;
            width: 50px;
        }

        100% {
            left: 48px;
            width: 20px;
        }
    }

    .toggle--label:after {
        transition-delay: 0ms;
        transition: all 250ms ease-in;
        position: absolute;
        content: '';
        box-shadow: var(--gray-dots) -13px 0 0 2px, var(--gray-dots) -24px 14px 0 -2px;
        left: 75px;
        top: 8px;
        width: 5px;
        height: 5px;
        background: transparent;
        border-radius: 50%;
        opacity: 0;
    }

    .toggle--checkbox:checked + .toggle--label:after {
        transition-delay: 350ms;
        opacity: 1;
    }

    .toggle--checkbox:checked + .toggle--label .toggle--label-background {
        width: 5px;
        left: 35px;
        top: 13px;
    }

    .toggle--checkbox:checked + .toggle--label .toggle--label-background:before {
        width: 5px;
        top: -5px;
        left: -15px;
    }

    .toggle--checkbox:checked + .toggle--label .toggle--label-background:after {
        width: 5px;
        left: -25px;
        top: 7px;
    }
`;