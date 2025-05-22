import { Builder } from '@builder.io/react'
import { useObserver } from 'mobx-react'
const context = require('@builder.io/app-context').default

function TailwindTab(props) {
    const { selection } = context.designerState
    return <input />
}

Builder.register('editor.editTab', {
    name: 'Tailwind',
    component: TailwindTab,
})
