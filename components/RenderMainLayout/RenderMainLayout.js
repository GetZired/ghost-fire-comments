import MainLayout from '../MainLayout'

const RenderMainLayout = () => {
	const renderElement = document.querySelector('#render-ghost-fire-comments')
	const container = document.createElement('div');
	container.innerHTML = MainLayout()
	const div = container.firstChild
	renderElement.appendChild(div);
}

module.exports = RenderMainLayout
