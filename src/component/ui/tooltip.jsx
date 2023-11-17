// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import styleToolTip from '../../assets/css/components/tooltip.module.scss'

function ToolTip({text}) {

    return (
      <>


            <div className={styleToolTip.tooltip}>
                <div className={styleToolTip.circle}>
                    <span>?</span>
                </div>
                <div className={styleToolTip.tooltiptext}>
                    {text}
                </div>
            </div>
            

      </>
    );
}

export default ToolTip;
