import CardView from "./CardView";

export default class CardViewBuilder {
  private title?: string;
  private content?: string;
  private button?: boolean;
  private style?: React.CSSProperties;

  setTitle(title: string): CardViewBuilder {
    this.title = title;
    return this;
  }

  setContent(content: string): CardViewBuilder {
    this.content = content;
    return this;
  }

  setButton(button: boolean): CardViewBuilder {
    this.button = button;
    return this;
  }

  setStyle(style: React.CSSProperties): CardViewBuilder {
    this.style = style;
    return this;
  }

  build(): JSX.Element {
    return (
      <CardView
        title={this.title}
        content={this.content}
        button={this.button}
        style={this.style}
      />
    );
  }
}
