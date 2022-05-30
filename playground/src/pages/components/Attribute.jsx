import React from "react";
import AttributeElement from "./AttributeElement";

class Attribute extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            itemList: {},
            item: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.item !== prevProps.item) {
            this.setState({item: this.props.item});
            const itemListTempArray = {};
            this.props.item.map((item) => itemListTempArray[item.id] = "");
            this.setState({itemList: itemListTempArray});
        }
    }

    render() {
        return (
                    !this.state.item.length && !this.state.itemList.length ? <p>LOADING</p> :

            <div className="attribute">
                    {
                        this.state.item.map(element => 
                            <AttributeElement element={element} itemList={this.state.itemList}/>
                        )
                    }

            </div> 

        )
    }
}

export default Attribute