import ObjectID from 'bson-objectid';
import React from 'react';

export const SimpleBoards = ({ title = "", description = "", date, priority = "medium", priorityClassName = 'primary', options = [], onOption = null }) => {

    const handleOptions = (opt) => {
        if (typeof onOption == 'function') onOption(opt);
    }

    return (
        <div className="kanban-item">
            <a className="kanban-box" href="#javascript">
                <span className="date">{date}</span>
                <span className={`badge badge-${priorityClassName} f-right`}>{priority}</span>
                <h6>{title}</h6>
                <div className="media">
                    <div className="media-body">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <ul className="list">
                        {options.map(opt => 
                            <li key={`item-option-${new ObjectID().toHexString()}`}
                                onClick={() => handleOptions(opt)}
                            >
                                <i className={opt.icon || null}></i>{opt.text}
                            </li>
                        )}
                    </ul>
                    <div className="customers">
                        <ul>
                            <li className="d-inline-block mr-3">
                                {/* <p className="f-12">100</p> */}
                            </li>
                            {/* <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img1}`)} alt="" /></li> */}
                            {/* <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img2}`)} alt="" /></li> */}
                            {/* <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img3}`)} alt="" /></li> */}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    )
}