module.exports = (sequelize, DataTypes) => {
    let alias = "Movies"; /*alias para la tabla*/
    let cols = { /*configurar las columnas de la tabla*/
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        title: {
            type: DataTypes.STRING(255) + ' CHARSET utf8 COLLATE utf8_general_ci',
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            defaultValue: 0
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        },
        genre_id: {
            type: DataTypes.INTEGER(10),
            allowNull: true
        }
    };
    let config = {
        tableName: "movies", /*puede no estar esta configuracion */
        timestamps: false
    };

    const Movies = sequelize.define(alias, cols, config);

    return Movies;
}

/* TIPOS DE DATOS

DataType.STRING          // VARCHAR(255)
DataType.STRING(400)     // VARCHAR(400)

DataType.INTEGER         // INTEGER
DataType.BIGINT          // BIGINT
DataType.FLOAT           // FLOAT
DataType.DOUBLE          // DOUBLE
DataType.DECIMAL         // DECIMAL

DataType.DATE            // DATE*/
