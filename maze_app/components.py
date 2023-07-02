from reactpy import component, html, hooks

@component
def app():

    maze, set_maze = hooks.use_state("")

    def handle_click(event):
        print(event)

    return html.div(
        html.textarea({"onChange": lambda e: print(e['target']['value'])}),
        html.button({"onClick": handle_click}, "Submit")
    )