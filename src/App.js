import React, { useState } from 'react';
import { Search, User, ShoppingBag, Map, Calendar, Package, Settings, Star, Heart, X, Check, MessageCircle, Camera, Coffee, Sparkles, Plus } from 'lucide-react';
import { trips, products } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showAddTripModal, setShowAddTripModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 筛选行程
  const filteredTrips = trips.filter(trip => 
    trip.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.tripTheme.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // 筛选商品
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.reason && product.reason.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  // 处理商品点击
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductDetailModal(true);
  };
  
  // 添加行程模态框
  const AddTripModal = () => (
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-pink-600">分享你的旅行</h2>
        <button onClick={() => setShowAddTripModal(false)} className="text-gray-500">
          <X size={20} />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <div className="block text-sm font-medium text-gray-700">旅行主题</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：东京购物休闲之旅" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">出发地</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：上海" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">目的地</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：东京" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block text-sm font-medium text-gray-700">出发日期</div>
            <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <div className="block text-sm font-medium text-gray-700">返回日期</div>
            <input type="date" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          </div>
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">可帮忙带物品空间</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：5kg" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">期望感谢费</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：5%" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">关于旅行的更多分享</div>
          <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" rows="3" placeholder="分享你此次旅行的计划、想去的地方，能带什么类型的物品等..."></textarea>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-20 h-20 border border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50">
            <Camera className="text-gray-400" />
          </div>
          <div className="w-20 h-20 border border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50">
            <Plus className="text-gray-400" />
          </div>
          <div className="text-xs text-gray-500 mt-1 w-full">
            添加旅行照片或目的地照片，让大家了解你的旅行
          </div>
        </div>
        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700">
          分享旅行
        </button>
      </div>
    </div>
  );
  
  // 添加商品模态框
  const AddProductModal = () => (
    <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-pink-600">想带点什么回来？</h2>
        <button onClick={() => setShowAddProductModal(false)} className="text-gray-500">
          <X size={20} />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <div className="block text-sm font-medium text-gray-700">心仪物品</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：资生堂红腰子精华" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">大概价格</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：约¥680" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">估计重量</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：150g" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">购买地点</div>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" placeholder="例如：日本药妆店" />
        </div>
        <div>
          <div className="block text-sm font-medium text-gray-700">为什么想要这个？</div>
          <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" rows="3" placeholder="分享你为什么想要这个物品，是自用还是送人..."></textarea>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-20 h-20 border border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50">
            <Camera className="text-gray-400" />
          </div>
          <div className="text-xs text-gray-500 mt-1 w-full">
            添加物品图片，帮助对方更容易找到
          </div>
        </div>
        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700">
          发布心愿
        </button>
      </div>
    </div>
  );
  
  // 商品详情模态框
  const ProductDetailModal = () => {
    if (!selectedProduct) return null;
    
    return (
      <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-pink-600">物品详情</h2>
          <button onClick={() => setShowProductDetailModal(false)} className="text-gray-500">
            <X size={20} />
          </button>
        </div>
        <div className="flex mb-4">
          <img src={selectedProduct.image} alt={selectedProduct.name} className="w-24 h-24 rounded-md object-cover" />
          <div className="ml-4">
            <h3 className="font-bold text-lg">{selectedProduct.name}</h3>
            <p className="text-gray-600">价格: {selectedProduct.price}</p>
            <p className="text-gray-600">重量: {selectedProduct.weight}</p>
            <p className="text-gray-600">购买地点: {selectedProduct.store}</p>
          </div>
        </div>
        <div className="mb-4 bg-pink-50 p-3 rounded-md">
          <p className="text-sm text-gray-700">
            <span className="font-medium">为什么想要:</span> {selectedProduct.reason}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-pink-600">已有{selectedProduct.requestCount}人想要此物品</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">谁能帮你带？</h3>
          <div className="space-y-3">
            {trips.filter(trip => trip.to.includes('日本')).map(trip => (
              <div key={trip.id} className="border border-gray-100 rounded-md p-4 bg-gray-50">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={trip.user.avatar} alt={trip.user.name} className="w-10 h-10 rounded-full" />
                    <div className="ml-2">
                      <div className="font-medium">{trip.user.name}</div>
                      <div className="flex items-center text-sm text-yellow-500">
                        <Star size={14} />
                        <span className="ml-1">{trip.user.rating}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-pink-600">
                    <MessageCircle size={18} />
                  </button>
                </div>
                
                <div className="mt-2">
                  <div className="text-sm font-medium">{trip.tripTheme}</div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span>{trip.from}</span>
                    <span className="mx-1">→</span>
                    <span>{trip.to}</span>
                    <span className="mx-1">·</span>
                    <Calendar size={12} className="ml-1 mr-1" />
                    <span>{trip.date.split('-')[1]}/{trip.date.split('-')[2]}-{trip.returnDate.split('-')[1]}/{trip.returnDate.split('-')[2]}</span>
                  </div>
                </div>
                
                {trip.photos && trip.photos.length > 0 && (
                  <div className="flex space-x-2 mt-2">
                    {trip.photos.map((photo, index) => (
                      <img key={index} src={photo} alt="旅行照片" className="w-12 h-12 rounded-md object-cover" />
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-3">
                  <div className="text-sm text-gray-500">
                    <Package size={12} className="inline mr-1" />
                    可带{trip.availableSpace} · 感谢费{trip.fee}
                  </div>
                  <button className="px-4 py-1.5 text-sm text-white bg-pink-600 rounded-full">
                    请求帮带
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Sparkles className="text-white mr-2" size={20} />
            <h1 className="text-xl font-bold text-white">拼哇</h1>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-white">
              <MessageCircle size={20} />
            </button>
            <button className="p-2 rounded-full text-white">
              <User size={20} />
            </button>
          </div>
        </div>
        <div className="mt-3 flex relative">
          <Search size={18} className="text-gray-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="搜索目的地、旅行主题或心仪物品"
            className="pl-10 pr-4 py-2 border-none rounded-full w-full bg-white bg-opacity-90"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
      
      {/* 主要内容 */}
      <main className="flex-1 overflow-auto p-4">
        {activeTab === 'home' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium flex items-center">
                <Coffee size={18} className="mr-2 text-pink-600" />
                <span>旅行发现</span>
              </h2>
              <button onClick={() => setShowAddTripModal(true)} className="text-pink-600 flex items-center text-sm px-3 py-1 border border-pink-600 rounded-full">
                分享旅行
              </button>
            </div>
            
            <div className="space-y-4">
              {filteredTrips.map(trip => (
                <div key={trip.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <img src={trip.user.avatar} alt={trip.user.name} className="w-10 h-10 rounded-full" />
                      <div className="ml-3">
                        <div className="flex items-center">
                          <span className="font-medium">{trip.user.name}</span>
                          {trip.verified && <Check size={16} className="ml-1 text-green-500" />}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star size={14} className="text-yellow-500" />
                          <span className="ml-1">{trip.user.rating}</span>
                          <span className="ml-2">已完成{trip.user.trips}次</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-pink-600">
                      <MessageCircle size={20} />
                    </button>
                  </div>
                  
                  <div className="mt-2">
                    <div className="font-medium text-base">{trip.tripTheme}</div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span>{trip.from}</span>
                      <span className="mx-1">→</span>
                      <span>{trip.to}</span>
                      <span className="mx-2">·</span>
                      <Calendar size={14} />
                      <span className="ml-1">{trip.date.split('-')[1]}/{trip.date.split('-')[2]}-{trip.returnDate.split('-')[1]}/{trip.returnDate.split('-')[2]}</span>
                    </div>
                  </div>
                  
                  {trip.photos && trip.photos.length > 0 && (
                    <div className="flex space-x-2 mt-3">
                      {trip.photos.map((photo, index) => (
                        <img key={index} src={photo} alt="旅行照片" className="w-24 h-24 rounded-md object-cover" />
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <Package size={14} className="inline mr-1" />
                      可带{trip.availableSpace} · 感谢费{trip.fee}
                    </div>
                    <div className="flex">
                      <button className="mr-2 px-3 py-1.5 text-sm border border-pink-600 text-pink-600 rounded-full flex items-center">
                        <Heart size={14} className="mr-1" />
                        关注
                      </button>
                      <button className="px-4 py-1.5 text-sm text-white bg-pink-600 rounded-full">
                        联系
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium flex items-center">
                  <Sparkles size={18} className="mr-2 text-pink-600" />
                  <span>心愿清单</span>
                </h2>
                <button onClick={() => setShowAddProductModal(true)} className="text-pink-600 flex items-center text-sm px-3 py-1 border border-pink-600 rounded-full">
                  添加心愿
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="bg-white p-3 rounded-lg shadow-sm cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    <img src={product.image} alt={product.name} className="w-full h-28 object-cover rounded-md mb-2" />
                    <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                    <div className="mt-1 flex justify-between items-center">
                      <span className="text-sm text-pink-600">{product.price}</span>
                      <span className="text-xs text-gray-500">{product.requestCount}人想要</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'trips' && (
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-pink-100 rounded-full">
              <Package size={32} className="text-pink-600" />
            </div>
            <h2 className="text-lg font-medium">我的旅行</h2>
            <p className="text-gray-500 mt-4">分享你的旅行，让闲置行李空间创造价值</p>
            <button 
              onClick={() => setShowAddTripModal(true)}
              className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full"
            >
              发布新旅行
            </button>
          </div>
        )}
        
        {activeTab === 'requests' && (
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-pink-100 rounded-full">
              <Sparkles size={32} className="text-pink-600" />
            </div>
            <h2 className="text-lg font-medium">我的心愿单</h2>
            <p className="text-gray-500 mt-4">添加你想从国外带回的心仪好物</p>
            <button 
              onClick={() => setShowAddProductModal(true)}
              className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full"
            >
              添加心愿物品
            </button>
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <img src="https://i.pravatar.cc/150?img=47" alt="用户头像" className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h2 className="text-lg font-medium">用户名</h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Star size={14} className="text-yellow-500" />
                  <span className="ml-1">0.0</span>
                  <span className="ml-2">尚未完成任何行程</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <Settings size={20} className="text-pink-600" />
                  <span className="ml-3">账户设置</span>
                </div>
                <span className="text-gray-400">›</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <MessageCircle size={20} className="text-pink-600" />
                  <span className="ml-3">消息中心</span>
                </div>
                <span className="text-gray-400">›</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <Star size={20} className="text-pink-600" />
                  <span className="ml-3">我的评价</span>
                </div>
                <span className="text-gray-400">›</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <ShoppingBag size={20} className="text-pink-600" />
                  <span className="ml-3">订单历史</span>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* 底部导航 */}
      <footer className="bg-white border-t p-2">
        <div className="flex justify-around">
          <button 
            className={`flex flex-col items-center p-2 ${activeTab === 'home' ? 'text-pink-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('home')}
          >
            <Map size={24} />
            <span className="text-xs mt-1">发现</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 ${activeTab === 'trips' ? 'text-pink-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('trips')}
          >
            <Package size={24} />
            <span className="text-xs mt-1">旅行</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 ${activeTab === 'requests' ? 'text-pink-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('requests')}
          >
            <ShoppingBag size={24} />
            <span className="text-xs mt-1">心愿</span>
          </button>
          <button 
            className={`flex flex-col items-center p-2 ${activeTab === 'profile' ? 'text-pink-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={24} />
            <span className="text-xs mt-1">我的</span>
          </button>
        </div>
      </footer>
      
      {/* 模态框 */}
      {showAddTripModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AddTripModal />
        </div>
      )}
      
      {showAddProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <AddProductModal />
        </div>
      )}
      
      {showProductDetailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ProductDetailModal />
        </div>
      )}
    </div>
  );
}

export default App;