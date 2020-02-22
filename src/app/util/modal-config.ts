import {ModalOptions} from 'ngx-bootstrap';

export class ModalConfig {

    public static getConfig(initialState: object): ModalOptions {
        const config: ModalOptions = {
            initialState: initialState,
            keyboard: true,
            backdrop: false,
            ignoreBackdropClick: true,
            class: 'modal-lg'
        }
        return config;
    }

    public static specialgetConfig(initialState: object, keyboard: boolean, backdrop: boolean, ignoreBackdropClick:boolean): ModalOptions {
        const config: ModalOptions = {
            initialState: initialState,
            keyboard: keyboard,
            backdrop: backdrop,
            ignoreBackdropClick: ignoreBackdropClick,
            class: 'modal-lg'
        }
        return config;
    }
}
