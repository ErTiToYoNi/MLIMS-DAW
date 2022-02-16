<?xsl version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    
    <xsl:template match="/">
        <html>
            <body>
                <h1>
                    <xsl:value-of select="secondary-school/name"/>
                </h1>
                <p>Web page:
                    <a>
                        <xsl:attribute name="href">
                            
                            <xsl:value-of select="secondary-school/web"/>
                        </xsl:attribute>
                        http://www.iesabastos.org/
                    </a>
                </p>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="web">
    </xsl:template>
    
    <xsl:template match="secondary-school/name">
    </xsl:template>
    
    <xsl:template match="cycles">
        <table>
            <xsl:attribute name="border">
                1
            </xsl:attribute>
            <th>Cycle name</th>
            <th>Grade</th>
            <th>Year of title</th>
            <xsl:apply-templates/>
        </table>
    </xsl:template>
    
    <xsl:template match="cycle">
        <tr>
            <td>
                <xsl:value-of select="name"/>
            </td>
            <td>
                <xsl:value-of select="grade"/>
            </td>
            <td>
                <xsl:value-of select="decreeTitle/@year"/>
            </td>
        </tr>
    </xsl:template>
    
</xsl:stylesheet>
