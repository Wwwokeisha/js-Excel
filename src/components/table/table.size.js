import {$} from '@core/dom';

export function tableResizeHandler($root, event) {
    const target = event.target.dataset.resize
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const sideProp = target === 'col' ? 'bottom' : 'right'
    let value
    // $parent.data.col - ячейка с дата атрибутом

    $resizer.css({
        opacity: 1,
        [sideProp]: '-3000px'
    })

    document.onmousemove = e => {
        if (target === 'col') {
            const delta = e.pageX - coords.right
            value = coords.width + delta
            $resizer.css({right: -delta + 'px'})
        } else {
            const delta = e.pageY - coords.bottom
            value = coords.height + delta
            $resizer.css({bottom: -delta + 'px'})
        }
    }

    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        if (target === 'col') {
            $parent.css({width: `${value}px`})
            $root.findAll(`[data-col="${$parent.data.col}"]`)
                .forEach(el => el.style.width = value + 'px')
        } else {
            $parent.css({height: value + 'px'})
        }

        $resizer.css({
            opacity: 0,
            bottom: 0,
            right: 0
        })
    }
}