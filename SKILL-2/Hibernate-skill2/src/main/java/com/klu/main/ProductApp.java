package com.klu.main;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import com.klu.entity.Product;

public class ProductApp {
    public static void main(String[] args) {
        // Load Hibernate configuration
        Configuration conf = new Configuration().configure("hibernate.cfg.xml");
        SessionFactory sf = conf.buildSessionFactory();

        // 1. INSERT
        Product p = new Product();
        p.setName("Laptop");
        p.setDescription("Gaming Laptop with RTX GPU");
        p.setPrice(1200.50);
        p.setQuantity(10);

        org.hibernate.Session s = sf.openSession();
        org.hibernate.Transaction tx = s.beginTransaction();
        s.persist(p);   // Save product
        tx.commit();
        s.close();

        // 2. READ
        s = sf.openSession();
        Product readProduct = s.find(Product.class, 1); // Replace 1 with actual productId
        System.out.println("Read: " + readProduct);
        s.close();

        // 3. UPDATE
        s = sf.openSession();
        Product updateProduct = s.find(Product.class, 1);
        updateProduct.setName("High-End Laptop");
        updateProduct.setDescription("Upgraded Gaming Laptop with RTX 5090 GPU");
        updateProduct.setPrice(1800.75);
        updateProduct.setQuantity(5);

        tx = s.beginTransaction();
        s.merge(updateProduct);  // Update product
        tx.commit();
        s.close();

        // 4. DELETE
        s = sf.openSession();
        Product deleteProduct = s.find(Product.class, 1);
        tx = s.beginTransaction();
        s.remove(deleteProduct); // Delete product
        tx.commit();
        s.close();

        sf.close();
    }
}