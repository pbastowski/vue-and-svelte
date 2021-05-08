/**
 * Dispatches an event that bubles up from within a custom element.
 *
 * @param {HTMLElement} el
 * @param {String} event Name of the event that you wish to dispatch
 * @param {Object} detail The event payload
 */
export const dispatchEvent = (el, event, detail) => {
    el.dispatchEvent(
        new CustomEvent(event, {
            detail,
            cancelable: true,
            bubbles: true,
            composed: true,
        }),
    )
}
