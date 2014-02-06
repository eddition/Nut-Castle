NutCastle::Application.routes.draw do
 root to: 'welcome#index'
 get '/about' => 'welcome#about'
 get  '/candy' => 'welcome#candy'
 get  '/chocolate' => 'welcome#chocolate'
 get  '/fruitsnuts' => 'welcome#fruitsnuts'
 get  '/contact' => 'welcome#contact'
end
