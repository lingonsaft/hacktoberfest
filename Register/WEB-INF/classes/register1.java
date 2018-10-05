import javax.servlet.*;
import java.io.*;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;
public class register1 extends HttpServlet
{
    public void doGet(HttpServletRequest req,HttpServletResponse res)throws IOException,ServletException
{
     ResultSet rs;
     res.setContentType("text/html");
     String u=req.getParameter("Username");
     String e=req.getParameter("Email");
     
    String n=req.getParameter("Phoneno");
    String p=req.getParameter("Password");

     try{
    Class.forName("com.mysql.jdbc.Driver");
    Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/student","root","");
    String sql="select Username from register where Username=?";
    PreparedStatement stmt=con.prepareStatement(sql);
     stmt.setString(1,u);
  // Statement s=con.createStatement();
     rs=stmt.executeQuery();
    
    if(rs.next()){
  	 res.sendRedirect("wrong.html");
    }
   if(rs.next()==false){
   PreparedStatement ps=con.prepareStatement("insert into register values(?,?,?,?)");
   ps.setString(1,u);
   ps.setString(2,e);
   ps.setString(3,n);
   ps.setString(4,p);
   int i=ps.executeUpdate();
		if(i>0){
		PrintWriter out=res.getWriter();
		out.println("<h1>You are successfully registered...</h1>");
                                out.println("<a href=indexlogin1.html><font size=4>Login</a>");
		}
          }
		con.close();
			
		}catch (Exception e2) {
PrintWriter out=res.getWriter();
out.println(e2);}
		
		}

}
