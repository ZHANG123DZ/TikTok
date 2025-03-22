import React from 'react'

function Login() {
  return (
    <div>
      <h2 className='loginTitle'>Đăng nhập vào TikTok</h2>
      <button className=''>x</button>
      <div>
        <div className='loginOptionContainer'>
            <button>
                <div className='Logo_icon'>
                    <img src="./src/assets/imgs/Qrcode.png" alt="Qr" />
                </div>
                <div className='Text_container'>
                    Sử dụng mã QR   
                </div>
            </button>
            <button>
                <div className='Logo_icon'>
                    <img src="./src/assets/imgs/Qrcode.png" alt="Qr" />
                </div>
                <div className='Text_container'>
                    Sử dụng số điện thoại   
                </div>
            </button>
            <button>
                <div className='Logo_icon'>
                    <img src="./src/assets/imgs/Qrcode.png" alt="Qr" />
                </div>
                <div className='Text_container'>
                    Tiếp tục với Facebook 
                </div>
            </button>
            <button>
                <div className='Logo_icon'>
                    <img src="./src/assets/imgs/Qrcode.png" alt="Qr" />
                </div>
                <div className='Text_container'>
                    Tiếp tục với Google
                </div>
            </button>
        </div>
      </div>
      <div className="Agreement">
        <p>
            Bằng việc tiếp tục với tài khoản có vị trí thoại<Link to="/">Việt Nam</Link>, bạn đồng ý với <Link to="/">Điều khoản dịch vụ</Link>, đồng thời xác nhận rằng bạn đã đọc. <Link to="">Chính sách quyền riêng tư</Link> của chúng tôi.
        </p>
      </div>
      <div className='Container'>Bạn không có tài khoản? <span style={"color: rgb(254, 44, 85);"}><Link>Đăng ký</Link></span></div>
    </div>
  )
}

export default Login
